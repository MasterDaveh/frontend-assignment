import React, { useCallback, useState } from 'react';
import { Typography, Input } from 'antd';
import PokemonList from '../PokemonList/PokemonList';
import classes from './Home.module.sass';

const Home = () => {
  const { Title, Text } = Typography;
  const [searchQuery, setSearchQuery] = useState('');

  const onQueryChange = useCallback((e) => {
    const qry = e.target.value;
    setSearchQuery(qry);
  }, [])

  return (
    <>
      <div className={classes.TitleSection}>
        <Title>👾 The complete pokèmon repository</Title>
      </div>
      <div className={classes.Search}>
        <Input
          size="large"
          placeholder="What's your favorite pokemon?"
          onChange={onQueryChange}
          style={{ width: 800 }}
          allowClear
        />
        <Text className={classes.SearchHint}>Start typing and we will update search results as you go 💪</Text>
      </div>
      <div className={classes.Results}>
        <PokemonList query={searchQuery} />
      </div>
    </>
  )
}

export default Home;