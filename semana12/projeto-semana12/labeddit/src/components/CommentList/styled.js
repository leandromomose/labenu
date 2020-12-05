import styled from 'styled-components'
import { Card } from '@material-ui/core'

export const VoteIcon = styled.img`
    height: 14px;
    width: 14px;
`

export const CardStyled = styled(Card)`
    width: 20vw;
    min-width: 300px;
    margin: 20px auto;
`

export const CommentContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 85vw;
    max-width: 465px;
    margin: 20px auto;
`

export const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    height: 10vh;
    justify-content: space-around;
    margin-bottom: 10px;
`