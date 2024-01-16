import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function BasicExample() {
  return (
    <Container>
      <div style={{ marginBottom: '-30px', marginTop: '35px' }}>
        <h2>Tambah Peminjam</h2>
      </div>
      <Form className="mt-5">
        <Form.Group className="mb-3" controlId="">
          <Form.Label>Nama Peminjam</Form.Label>
          <Form.Control type="text" placeholder="" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="">
          <Form.Label>Nama Buku</Form.Label>
          <Form.Control type="text" placeholder="" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="">
          <Form.Label>Deskripsi</Form.Label>
          <Form.Control type="text" placeholder="" as="textarea" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="">
          <Form.Label>Tanggal Masuk</Form.Label>
          <Form.Control type="date" placeholder="tanggal" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="">
          <Form.Label>Tanggal Keluar</Form.Label>
          <Form.Control type="date" placeholder="tanggal" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Kirim
        </Button>
      </Form>
    </Container>
  );
}

export default BasicExample;
