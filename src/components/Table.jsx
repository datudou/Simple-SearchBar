const React = require('react');
const {Table,Column,Cell} = require('fixed-data-table');



class MyTextCell extends React.Component {
  render() {
    const {rowIndex, field, data, ...props} = this.props;
    return (
      <Cell {...props}>
        {data[rowIndex][field]}
      </Cell>
    );
  }
}

class MyLinkCell extends React.Component {
  render() {
    const {rowIndex, field, data, ...props} = this.props;
    const link = data[rowIndex][field];
    console.log (this.props)
    return (
      <Cell {...props}>
        <a href={link}>{link}</a>
      </Cell>
    );
  }
}
class MyTable extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      myTableData:[
        {name: 'Rylan', email: 'Angelita_Weimann42@gmail.com'},
        {name: 'Amelia', email: 'Dexter.Trantow57@hotmail.com'},
        {name: 'Estevan', email: 'Aimee7@hotmail.com'},
        {name: 'Florence', email: 'Jarrod.Bernier13@yahoo.com'},
        {name: 'Tressa', email: 'Yadira1@hotmail.com'},
      ],
    };
  }

  render(){
    return(
     <Table
      rowsCount = {this.state.myTableData.length}
      rowHeight = {50}
      headerHeight = {50}
      width = {1000}
      height = {1000}
     >

      <Column
        header = {<Cell>Name</Cell>}
        cell = {
          <MyTextCell
            data = {this.state.myTableData}
            field = "name"
          />
        }
        width = {200}
      />
       <Column
         header={<Cell>Email</Cell>}
         cell={
            <MyLinkCell
              data={this.state.myTableData}
              field="email"
            />
          }
         width={200}
       />
     </Table>
    );
  }
}

export default MyTable;
