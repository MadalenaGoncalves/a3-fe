import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';

export const StyledTextField = styled(TextField)`
  label {
    text-transform: uppercase;
  }
`;

export const FileInputWrapper = styled.div`
  position: relative;
  input {
    font: inherit;
    // color: currentColor;
    width: 100%;
    border: 0;
    height: 1.1875em;
    margin: 0;
    display: block;
    padding: 6px 0 7px;
    min-width: 0;
    background: none;
    box-sizing: content-box;
    animation-name: MuiInputBase-keyframes-auto-fill-cancel;
    -webkit-tap-highlight-color: transparent;

    &:hover {
      cursor: pointer;
    }
  }
  input::placeholder {
    // color: currentColor;
    opacity: 0.42;
    transition: opacity 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    &:hover {
      cursor: pointer;
    }
  }
  &:before {
    left: 0;
    right: 0;
    bottom: 0;
    content: "";
    position: absolute;
    transition: border-bottom-color 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    border-bottom: 1px solid rgba(0, 0, 0, 0.42);
    pointer-events: none;
  }

  // &:after {
  //   left: 0;
  //   right: 0;
  //   bottom: 0;
  //   content: "";
  //   position: absolute;
  //   transform: scaleX(0);
  //   transition: transform 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms;
  //   border-bottom: 2px solid #3f51b5;
  //   pointer-events: none;
  // }
}
`;