import React from 'react'
import {Link} from 'gatsby'
import css from '@styled-system/css'
import pkg from '@mdx-js/mdx/package.json'
import Burger from './burger'
import theme from './theme'

const MenuButton = props => (
  <button
    title="Toggle Menu"
    {...props}
    css={css({
      appearance: 'none',
      border: 0,
      color: 'inherit',
      p: 2,
      bg: 'transparent',
      borderRadius: 4,
      '&:focus': {
        outline: '1px solid'
      },
      [theme.mediaQueries.big]: {
        display: 'none'
      }
    })}
  >
    <Burger />
  </button>
)

export default ({toggleMenu}) => (
  <header
    css={css({
      display: 'flex',
      alignItems: 'center',
      fontSize: 14
    })}
  >
    <Link
      to="/"
      css={css({
        display: 'flex',
        alignItems: 'center',
        p: 3,
        color: 'inherit',
        fontWeight: 'bold',
        textDecoration: 'none'
      })}
    >
      <img
        src="https://mdx-logo.now.sh"
        alt="MDX logo"
        height="32"
        css={css({
          mr: 3
        })}
      />
      MDX v{pkg.version}
    </Link>
    <div css={{margin: 'auto'}} />
    <a
      href="https://github.com/mdx-js/mdx"
      css={css({
        display: 'flex',
        alignItems: 'center',
        p: 3,
        color: 'inherit'
      })}
    >
      <img src="https://icon.now.sh/github/24" alt="GitHub logo" />
    </a>
    <MenuButton
      onClick={toggleMenu}
      css={css({
        mr: 2
      })}
    />
  </header>
)
