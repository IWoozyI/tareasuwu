import React, { useEffect } from 'react';
import { useQuery, useSubscription } from '@apollo/client';
import { gql } from 'graphql-tag';

// Consulta GraphQL normal para obtener datos
const GET_DATA = gql`
  query GetData {
    data {
      id
      value
    }
  }
`;

// Suscripción GraphQL para recibir actualizaciones en tiempo real
const DATA_SUBSCRIPTION = gql`
  subscription OnDataUpdated {
    dataUpdated {
      id
      value
    }
  }
`;

const Dashboard = () => {
  // Consulta de datos inicial (puede ser para cargar datos al principio)
  const { loading, error, data } = useQuery(GET_DATA);

  // Suscripción para obtener actualizaciones en tiempo real
  const { data: subscriptionData, loading: subLoading, error: subError } = useSubscription(DATA_SUBSCRIPTION);

  useEffect(() => {
    if (subscriptionData) {
      console.log('Actualización en tiempo real:', subscriptionData);
    }
  }, [subscriptionData]);

  if (loading || subLoading) return <p>Cargando...</p>;
  if (error || subError) return <p>Error: {error?.message || subError?.message}</p>;

  return (
    <div>
      <h1>Dashboard</h1>
      <h2>Datos iniciales:</h2>
      <ul>
        {data?.data.map((item) => (
          <li key={item.id}>{item.value}</li>
        ))}
      </ul>
      
      <h2>Actualizaciones en tiempo real:</h2>
      <ul>
        {subscriptionData?.dataUpdated ? (
          <li>{subscriptionData.dataUpdated.value}</li>
        ) : (
          <p>No hay actualizaciones aún</p>
        )}
      </ul>
    </div>
  );
};

export default Dashboard;
