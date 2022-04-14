import { signIn, signOut, useSession } from 'next-auth/client'

import { FaGithub } from "react-icons/fa"
import { FiX } from 'react-icons/fi'

import styles from './styles.module.scss'

export function SignInButton() {
  const [session] = useSession()

  return (
    <button
      type="button"
      className={styles.signInButton}
      onClick={() => !session
        ? signIn('github')
        : signOut()
      }
    >
      <FaGithub color={session
        ? "#04D361"
        : "#EBA417"
      }
      />
      {session
        ? session.user.name
        : "Sign in with GitHub"
      }
      {session &&
        <FiX color="#737380" className={styles.closeIcon} />
      }
    </button>
  )
}