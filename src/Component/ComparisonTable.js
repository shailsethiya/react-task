import React from 'react';
import './../App.css';
import { Table } from 'react-bootstrap';

const ComparisonTable = ({ data }) => {
  return (
    <div className="mt-4">
      {data && (
        <>
          <p className="text-center">COMPARISION TABLE</p>
          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>#</th>
                <th>ID</th>
                <th>URL</th>
                <th>TITLE</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td />
                <td>{data.id}</td>
                <td>{data.url}</td>
                <td>{data.title}</td>
              </tr>
            </tbody>
          </Table>
        </>
      )}
    </div>
  );
};

export default ComparisonTable;
