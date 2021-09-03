type AccountProps = {
	id: string;
	name: string;
	email: string;
	photoUrl: string;
};

export class Account {
	private props: AccountProps;
	private loaded: boolean;

	private constructor(props?: AccountProps, loaded?: boolean) {
		this.props = props;
		this.loaded = loaded || false;
	}

	static loggedIn(props: AccountProps): Account {
		return new Account(props, true);
	}

	static loggedOut(): Account {
		return new Account(null, true);
	}

	static empty(): Account {
		return new Account();
	}

	get id(): string {
		return this.props?.id;
	}

	get name(): string {
		return this.props?.name;
	}

	get email(): string {
		return this.props?.email;
	}

	get photoUrl(): string {
		return this.props?.photoUrl;
	}

	get authState(): 'loggedIn' | 'loggedOut' | 'loading' {
		if (this.props) {
			return 'loggedIn';
		} else if (this.loaded) {
			return 'loggedOut';
		} else {
			return 'loading';
		}
	}
}
