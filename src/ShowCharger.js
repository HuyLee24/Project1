import React, { Component } from 'react';
import ChargerTable from './ChargerTable';
import chargers from './mockChargerData';

class ShowCharger extends Component {
    state = {
        chargers: chargers
    }

    search = (event) => {
        let inputData = event.target.value.toLowerCase();

        let filteredChargers = chargers.filter((charger) => {
            return charger.name.toLowerCase().includes(inputData);
        })

        this.setState({
            chargers: filteredChargers
        });
    }

    render() {
        let { chargers } = this.state;
        console.log(chargers);

        return(
            <>  <form><label>Search for the charger name here:</label>{" "}
                <input placeholder='Type a name' onChange={this.search}></input>
                </form>
                <table>
                    <ChargerTable chargerData={chargers} />
                </table>
            </>  
        )
    }
}

export default ShowCharger