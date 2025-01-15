import styled from 'styled-components'
import { P } from '../../components/Paragrafo/styles'

export const Descricao = styled(P)`
  margin-top: 24px;
  margin-bottom: 40px;
`

export const BotaoTema = styled.button`
  cursor: pointer;
  border-radius: 12px;
  border: 1px solid ${(props) => props.theme.corDaBordaBotao};
  padding: 8px;
  font-weight: bold;
  font-size: 10px;
  color: ${(props) => props.theme.corDeFundo};
  background-color: ${(props) => props.theme.corDeFundoBotao};
`

export const SidebarContainer = styled.div`
  position: sticky;
  top: 80px;
  left: 0;

  @media (max-width: 768px) {
    margin-bottom: 40px;
    text-align: center;
  }
`
