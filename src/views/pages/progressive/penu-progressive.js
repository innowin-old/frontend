import React, { Component } from 'react'
import FontAwesome from 'react-fontawesome'

class MenuProgressive extends Component {
    constructor() {
        super()
        this.state = {
            activeStep: 1,
            steps: [
                { title: 'گام اول', icon: 'circle' },
                { title: 'گام دوم', icon: 'circle-o' },
                { title: 'گام سوم', icon: 'circle' },
                { title: 'گام چهارم', icon: 'circle-o' },
                { title: 'گام پنجم', icon: 'circle' },
            ],
            status: 'active'
        }
    }
    _goNext = () => {
        const { activeStep, steps } = this.state
        if (activeStep < steps.length) this._setStep((activeStep + 1), 'going-next')
    }
    _goPrev = () => {
        const { activeStep } = this.state
        if (activeStep !== 1) this._setStep((activeStep - 1), 'going-prev')
    }

    _setStep = (newStep, status) => {
        this.setState({ ...this.state, activeStep: newStep, status: status}, this._setWidth)
    }

    _setWidth = () => {
        setTimeout(() => this.setState({ ...this.state, status: 'active' }), 10)
    }

    render() {
        const { activeStep, steps, status } = this.props
        return (
            <div className="steps">
                {steps.map((step, index) => 
                    <div key={`progressiveStepWrapper${index}`} className={(activeStep === (index + 1)) ? `progressive-step-wrapper active ${status}-step${activeStep} steps-lenght${steps.length}` : 'progressive-step-wrapper'}>
                        <div className={(activeStep > index) ? 'checked progressive-step' : 'progressive-step'}>
                            <FontAwesome name={step.icon}/>
                            <div className="step-title">{step.title}</div>
                        </div>
                    </div>
                )}
            </div>
        )
    }
};
export default MenuProgressive