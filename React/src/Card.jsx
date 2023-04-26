import Layout from './Layout';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Card.css';
// import PropTypes from 'prop-types';
// import { FaEdit, FaTrashAlt } from 'react-icons/fa';

const Card = () => {
  return (
    <div className='cardOne'>
      <ActivityCard />
    </div>
  );
};

const ActivityCard = ({
  userName,
  activityName,
  description,
  startDateTime,
  finishDateTime,
  activityType,
  duration,
  distance,
  onDelete,
  onEdit,
}) => {
  return (
    <Layout>
      <div className='Card'>
        <header>
          <div className='cardHeader'>
            <table>
              <tr>
                <th>
                  <h1>WARUT NIYOMKA{userName}</h1>
                </th>
                <th>
                  <img
                    src='https://icons.veryicon.com/png/o/miscellaneous/simple-line-icon/edit-259.png'
                    width='45px'
                    heigth='45px'
                  />
                </th>
                <th>
                  <img
                    src='https://www.svgrepo.com/show/244044/delete.svg'
                    width='40px'
                    heigth='40px'
                  />
                </th>
              </tr>
            </table>
            <table>
              <tr>
                <th>
                  <img
                    src='https://images.vexels.com/media/users/3/239009/isolated/preview/2c0cee4ba304f6dae23351608ea878a3-figure-walking-cut-out.png'
                    width='50px'
                    height='50px'
                  />
                  {/* <h6>Walking{activityType}</h6> */}
                </th>
                <td>
                  <h4>Go to shopping{activityName}</h4>
                </td>
              </tr>
            </table>
            {/* <label id='acTypeL'>Walking{activityType}</label> */}
            <hr />
          </div>
        </header>
        <div className='cardBody'>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
            nesciunt animi aliquid sapiente magnam quisquam quasi ipsam aliquam
            nisi ab, a, enim, minima consequuntur rem temporibus? Fugit natus
            adipisci provident?{description}
          </p>
          {/* <th>Start Time</th> <th>Finish Time</th>
            </tr>
            <tr>
              <td>06:00 PM</td>
              <td>07:30 PM</td>
            </tr>
          </table>
          <table>
            <tr>
              <th>Duration</th>
              <th>Distance</th>
            </tr>
            <tr>
              <td>1.30 h</td>
              <td>5 KM</td> */}
          <label id='startL'>Start-DateTime{startDateTime}</label>{' '}
          <label id='finishL'>Finish-DateTime{finishDateTime}</label>{' '}
          <label id='setDuL'>Duration{duration}</label>{' '}
          <label id='setDisL'>Distance{distance}</label>{' '}
        </div>
      </div>
    </Layout>
  );
};

export default ActivityCard;
