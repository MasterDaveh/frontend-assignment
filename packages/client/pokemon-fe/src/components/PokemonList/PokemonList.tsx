import { useLazyQuery } from "@apollo/client";
import { useCallback, useEffect, useState } from "react";
import { POKEMONS_QUERY } from "../../utils/queries/queries";
import { Table, Tag } from 'antd';

interface PokemonListProps {
  query: string;
}

const columns = [
  { title: 'Name', dataIndex: 'name', key: 'name' },
  {
    title: 'Types', dataIndex: 'types', key: 'types',
    render: (types: []) => types.map((t: string) =>
      <Tag color="geekblue" key={t}>{t.toUpperCase()}</Tag>
    )
  },
  { title: 'Classification', dataIndex: 'classification', key: 'classification' }
]

const PokemonList = (props: PokemonListProps): JSX.Element => {
  const { query } = props;
  const [pokemonData, setPokemonData] = useState([]);
  const [getPokemons, { data, error }] = useLazyQuery(POKEMONS_QUERY, {
    variables: { q: query }
  });

  const mapDataItemToDataSourceItem = useCallback((dataItem, idx) => {
    const { name, classification, types } = dataItem.node;

    return {
      key: idx,
      name, classification, types
    }
  }, []);

  useEffect(() => {
    if (query.length > 0) {
      getPokemons()
    } else {
      setPokemonData([])
    }
  }, [query, getPokemons])

  useEffect(() => {
    if (data && query.length > 0) {
      setPokemonData(data.pokemons.edges.map(mapDataItemToDataSourceItem))
    }
  }, [data, query, mapDataItemToDataSourceItem])

  return (
    <Table
      style={{ width: '100%' }}
      dataSource={pokemonData}
      columns={columns}
    />
  )
}

export default PokemonList;