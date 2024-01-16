import React, { Component } from 'react'
import Navbar from './navbar'
import Table from './table'
import Formulir from './formulir'
import TablePeminjam from './tablePeminjam'
import FormulirPeminjam from './formulirPeminjam'

export default class Crud extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      bukus : [],
      nama : "",
      deskripsi : "",
      harga : "",
      id : "",
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name] : event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();

    if(this.state.id === "") {
        this.setState({
          bukus: [
            ...this.state.bukus,
            {
              id: this.state.bukus.length + 1,
              nama: this.state.nama,
              deskripsi: this.state.deskripsi,
              harga: this.state.harga
            },
          ],
        });
      } else {
        const bukuYangSelainDipilih = this.state.bukus
        .filter((buku) => buku.id !== this.state.id)
        .map((filterBuku) =>  {
          return filterBuku
      }); 

      this.setState({
        bukus: [
          ...bukuYangSelainDipilih,
          {
            id: this.state.bukus.length + 1,
            nama: this.state.nama,
            deskripsi: this.state.deskripsi,
            harga: this.state.harga
          },
        ],
      });
    }
    this.setState({
      nama : "",
      deskripsi : "",
      harga : "0",
      id : "",
    });
  }

  editData = (id) => {
    const bukuYangDipilih = this.state.bukus
    .filter((buku) => buku.id === id)
    .map((filterBuku) => {
      return filterBuku
    })

    this.setState({
      nama : bukuYangDipilih[0].nama,
      deskripsi : bukuYangDipilih[0].deskripsi,
      harga : bukuYangDipilih[0].harga,
      id: bukuYangDipilih[0].id,
    });
  }

  hapusData = (id) => {
    const bukuBaru = this.state.bukus
    .filter((buku) => buku.id !== id)
    .map((filterBuku) => {
      return filterBuku
    })

    this.setState({
      bukus : bukuBaru
    })
  }

  render() {
    console.log(this.state.bukus);
    return (
        <div>
            <Navbar />
            <div className='mt-4'>
                <Table bukus={this.state.bukus} editData={this.editData} hapusData={this.hapusData}/>
                <Formulir {...this.state} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
                <TablePeminjam />
                <FormulirPeminjam />
            </div>
      </div>
    )
  }
}
