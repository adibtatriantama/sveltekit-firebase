import type { User } from 'firebase/auth';
import { getAuthClient } from '$lib/clients/firebase.client';
import { Account } from '$lib/domains/account';

export async function popupLoginWithGoogle(): Promise<Account> {
	const auth = await getAuthClient();
	const { signInWithPopup, GoogleAuthProvider } = await import('firebase/auth');

	const { user } = await signInWithPopup(auth, new GoogleAuthProvider());

	return Account.loggedIn({
		id: user.uid,
		name: user.displayName,
		email: user.email,
		photoUrl: user.photoURL
	});
}

export async function logout(): Promise<Account> {
	const auth = await getAuthClient();
	const { signOut } = await import('firebase/auth');

	await signOut(auth);

	return Account.loggedOut();
}

export async function listenOnAuthStateChanged(
	callback: (account: Account) => void
): Promise<void> {
	const auth = await getAuthClient();
	const { onAuthStateChanged } = await import('firebase/auth');

	onAuthStateChanged(auth, (user: User) => {
		if (user) {
			callback(
				Account.loggedIn({
					id: user.uid,
					name: user.displayName,
					email: user.email,
					photoUrl: user.photoURL
				})
			);
		} else {
			callback(Account.loggedOut());
		}
	});
}
