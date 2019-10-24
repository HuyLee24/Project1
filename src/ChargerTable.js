import React, { Component } from 'react'

const TableHeader = () => { 
    return(
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Location</th>
                    <th>Type</th>
                    <th>Price</th>
                    <th>Code</th>
                    <th>Status</th>
                </tr>
            </thead>
            )
    }
    const TableBody = props => {
        const rows = props.chargerData.map((row, index) => {
            return (
                <tr key={index}>
                  <td>{row.id}</td>
                  <td>{row.name}</td>
                  <td>{row.location}</td>
                  <td>{row.type}</td>
                  <td>{row.price}</td>
                  <td>{row.code}</td>
                  <td>{row.status}</td>
                </tr>
              )
        })
    return <tbody>{rows}</tbody>
    
    }        

class ChargerTable extends Component {
    render(){
        const { chargerData } = this.props;

        return(
        <div className='tableForm'>
            <table>
                <TableHeader />
                <TableBody chargerData={chargerData}/>
            </table>
        </div>
        )
    }
}

export default ChargerTable