import * as React from 'react';
import { Button, ButtonProps, buttonClasses } from '@mui/base/Button';
import { styled, Theme } from '@mui/system';

const ButtonRoot = React.forwardRef(function ButtonRoot(

  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  props: React.PropsWithChildren<{}>,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ref: React.ForwardedRef<any>,
) {
  const { children, ...other } = props;

  return (
    <button {...other} ref={ref} style={{ border: 'none', background: 'none', padding: 0 }}>
      <svg viewBox="0 0 150 50" width="100%" height="50">
        <polygon points="0,50 0,0 150,0 150,50" className="bg" />
        <polygon points="0,50 0,0 150,0 150,50" className="borderEffect" />
        <foreignObject x="0" y="0" width="150" height="50">
          <div className="content">{children}</div>
        </foreignObject>
      </svg>
    </button>
  );
});

const SvgButton = React.forwardRef(function SvgButton(
  props: ButtonProps,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ref: React.ForwardedRef<any>,
) {
  return <Button type='submit' {...props} slots={{ root: CustomButtonRoot }} ref={ref} />;
});

export default function SubmitButton() {
  return <SvgButton>Analisar</SvgButton>;
}

const blue = {
  50: '#F0F7FF',
  100: '#C2E0FF',
  200: '#99CCF3',
  400: '#3399FF',
  500: '#007FFF',
  600: '#0072E6',
  700: '#0059B3',
  800: '#004C99',
  900: '#003A75',
};

const CustomButtonRoot = styled(ButtonRoot)(
  ({ theme }: { theme: Theme }) => `
  overflow: visible;
  cursor: pointer;

  --main-color: ${theme.palette.mode === 'light' ? blue[600] : blue[200]};
  --hover-color: ${theme.palette.mode === 'light' ? blue[50] : blue[900]};
  --active-color: ${theme.palette.mode === 'light' ? blue[100] : blue[800]};

  & polygon {
    fill: transparent;
    transition: all 800ms ease;
    pointer-events: none;
    }
    
    & .bg {
      stroke: var(--main-color);
      stroke-width: 1;
      filter: drop-shadow(0 4px 16px rgb(0 0 0 / 0.1));
      fill: transparent;
      }
   

  & .borderEffect {
    stroke: var(--main-color);
    stroke-width: 2;
    stroke-dasharray: 120 600;
    stroke-dashoffset: 120;
    fill: transparent;
  }

  &:hover,
  &.${buttonClasses.focusVisible} {
    .borderEffect {
      stroke-dashoffset: -900;
    }

    .bg {
      fill: var(--hover-color);
    }
  }

  &:focus,
  &.${buttonClasses.focusVisible} {
    outline: 5px solid ${theme.palette.mode === 'dark' ? blue[700] : blue[200]};
    outline-offset: 5px;
  }

  &.${buttonClasses.active} {
    & .bg {
      fill: var(--active-color);
      transition: fill 150ms ease-out;
    }
  }

  & foreignObject {
    pointer-events: none;

    & .content {
      font-size: 0.875rem;
      font-family: 'IBM Plex Sans', sans-serif;
      font-weight: 600;
      line-height: 1.5;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--main-color);
    }

    & svg {
      margin: 0 4px;
    }
  }`,
);
