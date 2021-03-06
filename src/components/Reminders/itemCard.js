import React from 'react'
import PropTypes from 'prop-types'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import DeleteIcon from '@material-ui/icons/Delete'
import Typography from '@material-ui/core/Typography'
import Timer from '../Timer'
import './style.css'

const ItemCard = (props) => {
  const { reminder, removeItem, notify, key } = props
  const { date, body, duration } = reminder
  let seconds = Number(duration)

  return (
    <div>
      <Card className="card">
        <CardContent>
          <Typography className="pos" color="textSecondary">
            {date}
          </Typography>
          <Typography component="p">
            {body}
          </Typography>
        </CardContent>
        <CardActions>
          <div className="card-actions">
            <div className="card-actions__btn">
              <Button variant="fab" color="secondary" aria-label="delete" onClick={removeItem}>
                <DeleteIcon />
              </Button>
            </div>
            <div className="card-actions__clock">
              <Timer
                seconds={seconds}
                onComplete={(notify)}
                key={key}
              />
            </div>
          </div>
        </CardActions>
      </Card>
    </div>
  )
}

  ItemCard.propTypes = {
    reminder: PropTypes.shape({
      date: PropTypes.string,
      body: PropTypes.string,
      duration: PropTypes.number
    }).isRequired,
    removeItem: PropTypes.func,
    notify: PropTypes.func
  }


export default ItemCard