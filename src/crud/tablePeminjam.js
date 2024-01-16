import React from "react";
import { Container, Table} from 'react-bootstrap'

const tabelPeminjam = () => {
    return (
        <Container>
            <div style={{ marginTop: '40px', marginBottom: '20px' }}>
                <h2>Tabel Peminjam</h2>
            </div>
        <Table striped bordered hover className="">
        <thead className="table-dark">
            <tr className="text-center">
                <th>No</th>
                <th>Nama Peminjam</th>
                <th>Nama Buku</th>
                <th>Deskripsi</th>
                <th>Tanggal Masuk</th>
                <th>Tanggal Keluar</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>Joko</td>
                <td>Pemorgraman PHP</td>
                <td>Buku Belajar Dasar Pemrograman PHP</td>
                <td>None</td>
                <td>None</td>
            </tr>
            {/* <tr>
                <td>2</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
            </tr>
            <tr>
                <td>3</td>
                <td colSpan="2">Larry the Bird</td>
                <td>@twitter</td>
            </tr> */}
        </tbody>
        </Table>
        </Container>
    )
}

export default tabelPeminjam