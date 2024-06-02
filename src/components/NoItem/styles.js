import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;

  background-color: ${({ theme, isNew }) => isNew ? 'transparent' : theme.COLORS.BACKGROUND_900};
  color: ${props => props.theme.COLORS.GRAY_300};

  border: ${({ theme, isNew }) => isNew ? `1px dashed ${theme.COLORS.GRAY_300}` : 'none'};

  margin-bottom: 8px;
  border-radius: 10px;
  padding-right: 16px;

  > button {
    border: none;
    background: none;
  }

  .button-delete {
    color: ${props => props.theme.COLORS.RED};
  }

  .button-add {
    color: ${props => props.theme.COLORS.ORANGE};
  }


  > input {
    height: 56px;
    width: 100%;

    padding: 12px;

    color: ${props => props.theme.COLORS.WHITE};
    background: transparent;

    border: none;

    &::placeholder {
      color: ${props => props.theme.COLORS.GRAY_300};
    }
  }
`;
