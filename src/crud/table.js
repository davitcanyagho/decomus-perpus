import { Container } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';

const Tabel = ({bukus, editData, hapusData}) => {
    return (
        <Container>
            <div style={{ marginBottom: '20px' }}>
                <h2>Daftar Buku</h2>
            </div>
    <Table striped bordered hover className=''>
      <thead className='table-dark'>
        <tr className='text-center'>
          <th>No</th>
          <th>Nama Buku</th>
          <th>Deskripsi</th>
          <th>Harga</th>
          <th>Aksi</th>
        </tr>
      </thead>
      <tbody>
        {bukus.map((buku, index) => {
          return(
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{buku.nama}</td>
              <td>{buku.deskripsi}</td>
              <td>{buku.harga}</td>
              <td className='text-center'>
                <button style={{ marginRight: '8px' }} className='btn btn-warning' onClick={() => editData(buku.id)}>Edit</button>
                <button className='btn btn-danger' onClick={() => hapusData(buku.id)}>Hapus</button>
              </td>
            </tr>
          );
        })}
      </tbody>
            </Table>
            </Container>
  );
}

export default Tabel;