"use client";

import React, { useState } from 'react';
import { Typography, Box } from '@mui/material';
import { InputContentStyle } from '../../../styles/AnalyserV1-Styles/input-content/styled';
import TextField from '@mui/material/TextField';
import SubmitButton from './button/SubmitButton';
import { fetchTokenReport } from '../../../services/GetTokenReport';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import { setData, setLoading } from '../../../store/dataSlice';
import Loading from './AnalyserV1-results/animations/Loading';
import { notification } from 'antd';

const InputContent: React.FC = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state: RootState) => state.data.loading);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [errors, setError] = useState('');
  const [api, contextHolder] = notification.useNotification();
  
  
  async function verify(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    
    const form = event.currentTarget;
    const inputValue = form.elements[0] as HTMLInputElement;
    
    if (!inputValue.value) {
    setError('Este campo não pode estar vazio');
    api.error({
      message: 'Erro',
      description: 'Este campo não pode estar vazio.',
      duration: 4, // Tempo de exibição da notificação (segundos)
      closeIcon: null, // Remove botão de fechar para evitar que fechem antes do tempo
      showProgress: true,
    });
    return;
    } else {
      setError('')
    } 
    
    try {
      dispatch(setLoading(true));
      const data = await fetchTokenReport(inputValue.value);
      api.success({
        message: 'Sucesso',
        description: 'Dados carregados com sucesso!',
        duration: 3,
        closeIcon: false,
        showProgress: true,
      })
      dispatch(setData(data));
    } catch {
      setError('Ocorreu um erro ao buscar o dados do token, certifique-se de verificar se é um endereço da rede SOLANA!')
      api.error({
        message: 'Erro',
        description: 'Ocorreu um erro ao buscar o dados do token, certifique-se que o endereço é da rede solana.',
        duration: 5, 
        closeIcon: null,
        showProgress: true,
      });
      dispatch(setLoading(false)); 
    } finally {
      dispatch(setLoading(false));
    }
  }

  
  return (
      <InputContentStyle>
    <Box padding={2
    }>
      {contextHolder}
      {loading ? <Loading /> : ''}
        <form action="#" onSubmit={verify}>
          <Typography variant="h6" gutterBottom>
            Insira o endereço do Token
          </Typography>
          <TextField  label="9qf14LK7..." id="fullWidth" />
          <Typography variant="body1" paragraph>
          </Typography>
              <SubmitButton />
        </form>
    </Box>
      </InputContentStyle>
  );
};

export default InputContent;
