import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero.js';
import Column from '../Column/Column.js';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';

class List extends React.Component {
    static propTypes = {
        title: PropTypes.node.isRequired,
        children: PropTypes.string,
        image: PropTypes.string,
    }

    static defaultProps = {
        children: <p> I can do all the things!!</p>
    }

  render() {
    return (
      <section className={styles.component}>
        <Hero titleText={this.props.title}/>
        <div className={styles.decription}>
            {this.props.children}
        </div>
        <div className={styles.columns}>
          <Column title={'Column1'}/>
          <Column title={'Column2'}/>
          <Column title={'Column3'}/>
        </div>
      </section>
    )
  }
}

export default List;