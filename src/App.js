import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import './App.css';
import Lists from './Component/Lists';
import Pagination from './Component/Pagination';
import ComparisonTable from './Component/ComparisonTable';
import axios from 'axios';

function App() {
  const [lists, setList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [listPerPage, setPostPerPage] = useState(9);
  const [data, setDataList] = useState([]);
  const [dataStore, setDataStore] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get(
        'https://jsonplaceholder.typicode.com/photos'
      );
      setList(res.data);
      setLoading(false);
    };
    fetchPosts();
  }, []);

  //Get current posts
  const indexOfLastList = currentPage * listPerPage;
  const indexOfFirstList = indexOfLastList - listPerPage;
  const currentLists = lists.slice(indexOfFirstList, indexOfLastList);

  //Change Page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  //Compare list
  const compareData = data => {
    const tableData = localStorage.setItem('data', data);
    setDataList(data);
  };

  useEffect(() => {
    const data = localStorage.getItem('data');
    setDataList(data);
  }, []);

  return (
    <Container className="app">
      <h5 className="photoList">Photo Listing </h5>
      <Lists lists={currentLists} loading={loading} compareData={compareData} />
      <Pagination
        listPerPage={400}
        totalList={lists.length}
        paginate={paginate}
      />
      <ComparisonTable data={data} />
    </Container>
  );
}

export default App;
