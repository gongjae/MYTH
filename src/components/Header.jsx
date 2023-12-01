import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css'
import { auth, UserButton } from '@clerk/nextjs'
import { useEffect, useState } from 'react'

function ColorSchemesExample() {
  const [userId, setUserId] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      const { userId } = await auth()
      setUserId(userId)
    }

    fetchData()
  }, [])
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">MYTH</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#TOP">TOP</Nav.Link>
            <Nav.Link href="#BOTTOM">BOTTOM</Nav.Link>
            <Nav.Link href="#SHOES">SHOES</Nav.Link>
            <Nav.Link href="#BAG">BAG</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      {!userId ? (
        //로그인이 안된 경우
        <>
          <div className="bg-gray-500 py-4 px-8">
            <a
              href="/sign-in"
              className="text-yellow-300 hover:text-white mr-4"
            >
              Sign In
            </a>
            <a
              href="/sign-up"
              className="text-yellow-300 hover:text-white mr-4"
            >
              Sign UP
            </a>
          </div>
        </>
      ) : (
        //로그인된 경우
        <>
          <div className="ml-auto">
            <UserButton afterSignOutUrl="/" />
          </div>
        </>
      )}
    </>
  )
}

export default ColorSchemesExample
