import { useState } from "react"
import { Link } from "react-router-dom"
import { Button, IconButton, useScrollTrigger } from "@mui/material"
import { motion } from "framer-motion"
import MenuIcon from "@mui/icons-material/Menu"
import CancelIcon from "@mui/icons-material/Cancel"
import logo from "@assets/default-monochrome-black.svg"
import logoWhite from "@assets/default-monochrome-white.svg"
import bg from "@assets/Hero-bg.png"

const styles = {
  navbar: `bg-goldenOrange text-white shadow-lg`,
  link: `no-underline font-bold text-black hover:text-goldenOrange text-xs`,
  triggerLink: `no-underline font-bold text-white hover:text-tealBlue text-xs`,
  dropdownLink: `no-underline font-bold text-white text-xs pt-2 uppercase tracking-tight`,
}

const dropdown = {
  closed: {
    opacity: 0,
    height: 0,
    overflow: "hidden",
    transition: {
      duration: 0.2,
      ease: "easeInOut",
    },
  },
  open: {
    opacity: 1,
    height: "auto",
    overflow: "visible",
    transition: {
      duration: 0.2,
      ease: "easeInOut",
    },
  },
}

const Hero = () => {
  const [open, setOpen] = useState(false)

  function handleOpen() {
    setOpen(true)
  }

  function handleClose() {
    setOpen(false)
  }

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 200,
  })

  return (
    <section className="h-[650px] scroll-smooth">
      <img
        src={bg}
        alt="background"
        className="z-0 absolute w-full h-[650px] object-cover pointer-events-none"
      />
      <section className="z-10 relative">
        <nav className={open ? styles.navbar : ""}>
          <div className="container flex py-3 justify-between items-center">
            <Link to="#hero">
              {open ? (
                <img src={logoWhite} className="h-6" alt="logo" />
              ) : (
                <img src={logo} className="h-6" alt="logo" />
              )}
            </Link>
            {open ? (
              <IconButton
                className="lg:hidden"
                color="inherit"
                size="large"
                onClick={handleClose}
              >
                <CancelIcon />
              </IconButton>
            ) : (
              <IconButton
                className="lg:hidden"
                color="inherit"
                size="large"
                onClick={handleOpen}
              >
                <MenuIcon />
              </IconButton>
            )}
            <div className="hidden lg:flex justify-center items-center gap-8">
              <Link to="#hero" className={styles.link}>
                Home
              </Link>
              <Link to="feed" className={styles.link}>
                Feed
              </Link>
              <Link
                to="https://hanyehtun.netlify.app/"
                target={"_blank"}
                className={styles.link}
              >
                Developer
              </Link>
            </div>
            <Button
              variant="contained"
              color="primary"
              className="hidden lg:block"
            >
              Get Started
            </Button>
          </div>
        </nav>
        {trigger ? (
          <nav className="fixed top-0 w-full z-20 bg-goldenOrange text-white shadow-lg">
            <div className="container flex py-3 justify-between items-center">
              <Link to="#hero">
                <img src={logoWhite} className="h-6" alt="logo" />
              </Link>
              {open ? (
                <IconButton
                  className="lg:hidden"
                  color="inherit"
                  size="large"
                  onClick={handleClose}
                >
                  <CancelIcon />
                </IconButton>
              ) : (
                <IconButton
                  className="lg:hidden"
                  color="inherit"
                  size="large"
                  onClick={handleOpen}
                >
                  <MenuIcon />
                </IconButton>
              )}
              <div className="hidden lg:flex justify-center items-center gap-8">
                <Link to="#hero" className={styles.triggerLink}>
                  Home
                </Link>
                <Link to="feed" className={styles.triggerLink}>
                  Feed
                </Link>
                <Link
                  to="https://hanyehtun.netlify.app/"
                  target={"_blank"}
                  className={styles.triggerLink}
                >
                  Developer
                </Link>
              </div>
              <Button
                variant="contained"
                className="shadow-3xl hidden bg-white text-black hover:bg-gray-200 lg:block"
              >
                Get Started
              </Button>
            </div>
          </nav>
        ) : null}

        <motion.div
          className="fixed w-full z-20 bg-goldenOrange flex flex-col gap-2 px-3 pb-3 md:px-10 divide-y-2 divide-solid divide-x-0 lg:hidden"
          variants={dropdown}
          initial="closed"
          animate={open ? "open" : "closed"}
        >
          <Link to="#hero" className={styles.dropdownLink}>
            Home
          </Link>
          <Link to="feed" className={styles.dropdownLink}>
            Feed
          </Link>
          <Link
            to="https://hanyehtun.netlify.app/"
            target={"_blank"}
            className={styles.dropdownLink}
          >
            Developer
          </Link>
        </motion.div>
        <div className="container mt-24">
          <div className="w-full md:w-1/2">
            <h1 className="font-title text-brightOrange text-4xl">
              Get inspired and start planning your dream trip today.
            </h1>
            <p className="text-white font-light text-sm">
              Discover new cultures, try new foods, and create unforgettable
              memories with{" "}
              <span className="font-bold text-brightOrange">Wanderer</span>
              .Get out of your comfort zone and make new friends and make your
              travel dreams a reality.
            </p>
            <Button variant="contained" className="shadow-3xl">
              Get Started
            </Button>
          </div>
        </div>
      </section>
    </section>
  )
}

export default Hero
