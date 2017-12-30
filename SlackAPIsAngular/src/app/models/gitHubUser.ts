
export class GitHubUser {

  private name: string;
  private userName:string;
  private bio:string;
  private numOfRepos:number;

  constructor(json: any) {
    this.name = json.name;
    this.userName = json.login;
    this.bio = json.bio;
    this.numOfRepos = json.public_repos;
  }

  getName():string{
    return this.name;
  }
  getUserName():string{
    return this.userName;
  }

  getNumOfRepos():number{
    return this.numOfRepos;
  }
}
