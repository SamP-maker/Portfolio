import React from 'react';
import styled,{css} from 'styled-components';
import Theme from '../../theme/theme';

const Label = ({text,fontSize}) =>{




    return(<LabelWrapper  fontSize={fontSize}>
        {text}
    </LabelWrapper>)
}


const LabelWrapper = styled.label`
font-family: 'Work Sans', sans-serif;
font-size: ${(props) => props.fontSize};
color: ${Theme.colors.BackgroundBlack};
text-shadow: 1px 2px 4px rgba(81,67,21,0.8);
font-weight:bold;


}

`

export default Label