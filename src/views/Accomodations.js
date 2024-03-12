import OnlyHeader from "components/Headers/OnlyHeader";
import React from "react";
import {
  Button,
  Card,
  CardHeader,
  Col,
  Container,
  Media,
  Row,
  Table,
} from "reactstrap";

const Accomodations = () => {
  const allacommodations = [
    {
      id: "1",
      title: "hello",
      city: "madrid",
      country: "spain",
      availabilty: "avaiable April afterwards",
      pricePerNight: "100",
      currency: "EUR",
    },
  ];
  return (
    <div>
      <OnlyHeader />
      <Container className="mt--7" fluid>
        <Row className="mb-5">
          <div className="col">
            <Card className="shadow">
              <CardHeader className="border-0">
                <Row className="d-flex flex-column justify-content-between align-items-center flex-xl-row mx-3">
                  <h3 className="text-center text-xl-left">Accomodations</h3>
                  <Button color="primary">Add Accomodation</Button>
                </Row>
              </CardHeader>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">Title</th>
                    <th scope="col">City/Country</th>
                    <th scope="col">availabilty</th>
                    <th scope="col">price</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {allacommodations && allacommodations.length > 0 ? (
                    allacommodations?.map((item, index) => (
                      <tr key={index}>
                        <th scope="row">
                          <Media className="align-items-center">
                            <Media>
                              <span className="mb-0 text-sm">
                                {item?.title}
                              </span>
                            </Media>
                          </Media>
                        </th>

                        <td>
                          {item.city} / {item.country}
                        </td>
                        <td>{item.availabilty}</td>
                        <td>
                          {item.pricePerNight} &nbsp;
                          {item.currency}
                        </td>
                        <td>
                          <Button color="primary" size="sm">
                            <i className="fas fa-pencil-alt" />
                          </Button>
                          <Button color="danger" className="mx-2" size="sm">
                            <i className="fa fa-trash"></i>
                          </Button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <></>
                    // <tr>
                    //   <td colSpan="6" style={{ textAlign: "center" }}>
                    //     {allBlogs && allBlogs.length === 0 ? (
                    //       <p className="mb-0 text-sm">No Blogs Found.</p>
                    //     ) : (
                    //       <Spinner
                    //         size="lg"
                    //         style={{
                    //           display: "block",
                    //           margin: "0 auto",
                    //         }}
                    //       />
                    //     )}
                    //   </td>
                    // </tr>
                  )}
                </tbody>
              </Table>
              {/* {totalPages > 0 && (
                <CardFooter className="py-4">
                  <nav aria-label="...">
                    <ReactPaginate
                      previousLabel={"<"}
                      nextLabel={">"}
                      breakLabel={"..."}
                      breakClassName={"break-me"}
                      pageCount={totalPages}
                      marginPagesDisplayed={1}
                      pageRangeDisplayed={2}
                      onPageChange={handlePageChange}
                      containerClassName={
                        "pagination px-1 justify-content-end mb-0"
                      }
                      activeClassName={"active"}
                      pageClassName={"page-item"}
                      pageLinkClassName={"page-link"}
                      previousClassName={"page-item"}
                      nextClassName={"page-item"}
                      previousLinkClassName={"page-link"}
                      nextLinkClassName={"page-link"}
                    />
                  </nav>
                </CardFooter>
              )} */}
            </Card>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default Accomodations;
