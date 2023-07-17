import React from 'react';
import styled,{css} from 'styled-components';
import Theme from '../theme/theme';

const Label = ({text,fontSize}) =>{




    return(<LabelWrapper  fontSize={fontSize}>
        {text}
    </LabelWrapper>)
}


const LabelWrapper = styled.label`
font-family: ${Theme.font};
font-size: ${(props) => props.fontSize};
color: ${Theme.colors.white};



}

`

export default Label