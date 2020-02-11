import React from 'react';
import styles from './Column.scss';
import Card from '../Card/Card';
import {settings} from '../../data/dataStore';
import Creator from '../Creator/Creator.js';
import Icon from '../Icon/Icon';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';



class Column extends React.Component {

  state = {
    cards: this.props.cards || [],
  }

    static propTypes = {
      cards: PropTypes.array,
    }

    addCard(title){
      this.setState(state => (
        {
          cards: [
            ...state.cards,
            {
              key: state.cards.length ? state.cards[state.cards.length-1].key+1 : 0,
              title
            }
          ]
        }
      ));
    }

  render() {
    return (
      <section className={styles.component}>
        <h3 className={styles.title}>{ReactHtmlParser(this.props.title)}
        <span className={styles.icon}>
          <Icon name={this.props.icon}/>
        </span>
        </h3>
        <div className={styles.title}>
          {this.state.cards.map(({key, ...cardProps}) => (
          <Card key={key} {...cardProps} />
           ))} 
        </div>
        <div className={styles.creator}>
          <Creator text={settings.cardCreatorText} 
          action={title => this.addCard(title)}/>
        </div>
      </section>
    )
  }
}

export default Column;