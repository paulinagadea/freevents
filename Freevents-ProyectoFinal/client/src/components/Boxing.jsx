import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import CardProveedor from './CardProveedor';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProviders } from "../actions";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: '#d9c2ba',
    height: '305px',
    borderRadius: '5px',
  },
  imageList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background:
    'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
  img: {
    margin: '3px',
  }
}));

export default function SingleLineImageList() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const allProviders = useSelector((state) => state.providers)

  useEffect(() => {
    dispatch(getProviders())
  }, [dispatch])
  
  return (
    
    <div className={classes.root}>
      <ImageList className={classes.imageList} cols={2.5}>
        {allProviders && allProviders.map((provider) => {
        return (
          <div className={classes.img}>
          <CardProveedor
            background_image={provider.background_image}
            name={provider.name}
          />
          </div>
        )
      })}
          </ImageList>
        
    </div>
  );
}