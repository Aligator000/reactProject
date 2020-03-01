import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero.js';
import Column from '../Column/ColumnContainer.js';
import {settings} from '../../data/dataStore';
//import Creator from '../Creator/Creator.js';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';


class List extends React.Component {
 
  /*state = {
    columns: this.props.columns || [],
  }*/

    static propTypes = {
      title: PropTypes.node.isRequired,
      description: PropTypes.node,
      columns: PropTypes.array,
      image: PropTypes.string,
    }

    static defaultProps = {
      description: settings.defaultListDescription,
    }

    render() {
      const {title, image, description, columns} = this.props;
      return (
        <section className={styles.component}>
          <Hero titleText={title} image={image}/>
          <div className={styles.decription}>
            {ReactHtmlParser(description)}
          </div>
          <div className={styles.columns}>
            {columns.map(columnData => (
              <Column key={columnData.id} {...columnData} />
            ))}
          </div>
          {/*}
          <div className={styles.creator}>
            <Creator text={settings.columnCreatorText} 
            action={title => this.addColumn(title)}/>
          </div>
          */}
        </section>
      );
    }
}

export default List;