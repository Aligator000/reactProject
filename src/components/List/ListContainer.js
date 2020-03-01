import {connect} from 'react-redux';
import List from './List';
import { getColumnsForList } from '../../redux/columnsRedux';
import { createAction_addColumn } from '../../redux/columnsRedux';

{/*export const getColumnsForList = ({columns}, listId) => 
  columns.filter(column => column.listId == listId);
*/}

const mapStateToProps = (state, props) => ({
  columns: getColumnsForList(state, props.id),
});

const mapDispatchToProps = (dispatch, props) => ({
  addColumn: title => dispatch(createAction_addColumn({
    listId: props.id,
    title,
  })),
});




export default connect(mapStateToProps, mapDispatchToProps)(List);