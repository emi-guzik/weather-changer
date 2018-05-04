import React, { Component} from 'react';
import CloudElement from './CloudElement';
import SunElement from './SunElement';
import _ from 'lodash';
import tree from '../images/tree.svg'

export default class AnimationClouds extends Component {

    constructor(props) {
        super(props);
        this.clouds = {};
    }

    getClouds(cloudsAmount) {
        this.clouds = {     amount: cloudsAmount,
                            cloudsElements: []
                    };

        _.times(this.clouds.amount, (index) => {
            this.clouds.cloudsElements.push(<CloudElement key={index} />);
          });

        return this.clouds.cloudsElements;       
    }


    render() {
        return (
            <div className="clouds__wrapper">
                {(this.props.cloudDensity === "low") &&    
                <div>  
                    <div className="clouds__low">
                        <SunElement />
                        {this.getClouds(5)}
                    </div>
                    <img className="tree-image" src={tree} alt="tree"/>
                </div>
                }

                {(this.props.cloudDensity === "medium") && 
                <div className="clouds__medium">
                    {this.getClouds(5)}
                </div>
                }

                {(this.props.cloudDensity === "high") && 
                <div>
                    <div className="clouds__high">
                        {this.getClouds(10)}
                    </div>
                    <img className="tree-image" src={tree} alt="tree"/>
                </div>
                }
                
            </div>
        );
    }
}