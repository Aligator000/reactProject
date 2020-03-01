import React from 'react';
import styles from './Column.scss';
import Card from '../Card/Card';
//import {settings} from '../../data/dataStore';
//import Creator from '../Creator/Creator.js';
import Icon from '../Icon/Icon';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';


class Column extends React.Component {

  static propTypes = {
    title: PropTypes.node,
    icon: PropTypes.node,
    cards: PropTypes.node,
  }

  render() {
    const {title, icon, cards} = this.props;
    return (
      <section className={styles.component}> 
        <h3 className={styles.title}>{ReactHtmlParser(title)}
          <span className={styles.icon}>
            <Icon name={icon}/>
          </span>
        </h3>
        <div className={styles.title}>
          {cards.map(cardData => (
            <Card key={cardData.id} {...cardData} />
          ))} 
        </div>
        {/*
        <div className={styles.creator}>
          <Creator text={settings.cardCreatorText} 
          action={title => this.addCard(title)}/>
        </div>*/}
      </section>
    );
  }
}

export default Column;