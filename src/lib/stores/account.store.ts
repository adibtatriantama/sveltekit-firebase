import { writable } from 'svelte/store';
import { Account } from '$lib/domains/account';
import {
	popupLoginWithGoogle as firebaseLogin,
	logout as firebaseLogout,
	listenOnAuthStateChanged as firebaseListenOnAuthStateChanged
} from '$lib/services/auth.service';

export const accountStore = writable<Account>(Account.empty());

export async function listenOnAuthStateChanged(): Promise<void> {
	try {
		await firebaseListenOnAuthStateChanged((account) => {
			accountStore.set(account);
		});
	} catch (error) {
		console.log(error.message);
	}
}

export async function popupLoginWithGoogle(): Promise<void> {
	try {
		accountStore.set(await firebaseLogin());
	} catch (error) {
		console.log(error.message);
	}
}

export async function logout(): Promise<void> {
	try {
		accountStore.set(await firebaseLogout());
	} catch (error) {
		console.log(error.message);
	}
}
