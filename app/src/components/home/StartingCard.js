import React, {Component, Fragment} from 'react';
import { Carousel } from 'antd';

export class StartingCard extends Component {
    constructor(){
        super();
        this.state={
            isClicked: false
        }
    }

    render() {
        if(this.state.isClicked){
            return(
              <div>xD pyklo se</div>
            );
        }
        else{
            return(
                <Fragment>

                </Fragment>

            );
        }


    }
}

export default StartingCard;