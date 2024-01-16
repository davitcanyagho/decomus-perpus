import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Formulir = ({nama, deskripsi, harga, handleChange, handleSubmit, id}) => {
  return (
    <Container>
      <div style={{ marginBottom: "-30px", marginTop: '30px'}}>
        <h2>{id ? "Edit Data" : "Tambah Data"}</h2>
      </div>
      <Form className="mt-5" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="nama">
          <Form.Label>Nama Buku</Form.Label>
          <Form.Control type="text" name="nama" value={nama} onChange={(event) => handleChange(event)} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="deskripsi">
          <Form.Label>Deskripsi</Form.Label>
          <Form.Control type="text" as="textarea" name="deskripsi" value={deskripsi} onChange={(event) => handleChange(event)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="harga">
          <Form.Label>Harga Buku</Form.Label>
          <Form.Control type="number" name="harga" value={harga} onChange={(event) => handleChange(event)} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Kirim
        </Button>
      </Form>
    </Container>
  );
}

export default Formulir;
