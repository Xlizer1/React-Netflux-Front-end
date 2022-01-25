import React from "react";

class Filter extends React.Component{
        constructor(props) {
            super(props);
            this.state = {value: ''};
            this.onChangeHandler = this.onChangeHandler.bind(this);
        }
        
        onChangeHandler(event) {
            this.props.onSelectChange(event.target.value)
            this.setState({value: event.target.value})
        }

    render() {

        return (<section className="section filter">
            <div className="container">
                <form>
                    <label className="movieTypeLabel">{this.props.type}</label>
                    <select className="movieTypeSelect" onChange={this.onChangeHandler}>
                        <option value="">{this.props.optionText}</option>
                        <option value="Action">أكشن</option>
                        <option value="Thriller">غموض</option>
                        <option value="Comedy">كوميديا</option>
                        <option value="Drama">دراما</option>
                    </select>
                </form>
            </div>
        </section>
        )
    }
}

export default Filter;