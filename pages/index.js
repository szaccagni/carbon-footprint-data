import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
      <div>
        <h1>CoolClimate Data by Zip code</h1>
        <p>to get data on a specific zip code, please append the root url with '/api/footprints?zip=' and then the zip code you're searching for</p>
        <small>Copyright © 2014, Regents of the University of California, University of California, Berkeley. All rights reserved.</small>
      </div>
  )
}
