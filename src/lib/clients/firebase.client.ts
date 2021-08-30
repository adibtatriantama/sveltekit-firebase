import type { Analytics } from 'firebase/analytics';
import type { Auth } from 'firebase/auth';
import type { Database } from 'firebase/database';
import type { Firestore } from 'firebase/firestore';
import type { FirebaseStorage } from 'firebase/storage';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '$lib/configs/firebase.config';

const app = initializeApp(firebaseConfig);

export async function getAnalyticsClient(): Promise<Analytics> {
	const { getAnalytics } = await import('firebase/analytics');
	return getAnalytics(app);
}

export async function getAuthClient(): Promise<Auth> {
	const { getAuth } = await import('firebase/auth');
	return getAuth(app);
}

export async function getDatabaseClient(): Promise<Database> {
	const { getDatabase } = await import('firebase/database');
	return getDatabase(app);
}

export async function getFirestoreClient(): Promise<Firestore> {
	const { getFirestore } = await import('firebase/firestore');
	return getFirestore(app);
}

export async function getStorageClient(): Promise<FirebaseStorage> {
	const { getStorage } = await import('firebase/storage');
	return getStorage(app);
}
