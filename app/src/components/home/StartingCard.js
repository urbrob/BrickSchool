import React, {Component} from 'react';
import { Carousel } from 'antd';

export class StartingCard extends Component {
    constructor(){
        super();
        this.state={
            isClicked: true
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
              <div>xD nie pyklo</div>
            );
        }


    }
}

export default StartingCard;