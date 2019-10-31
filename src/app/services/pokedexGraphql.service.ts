import gql from "graphql-tag";
import { Injectable } from "@angular/core";
import * as Apollo from "apollo-angular";
export type Maybe<T> = T | null;
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Attack = {
  __typename?: "Attack";
  name?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
  damage?: Maybe<Scalars["Int"]>;
};

export type Pokemon = {
  __typename?: "Pokemon";
  id: Scalars["ID"];
  number?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  weight?: Maybe<PokemonDimension>;
  height?: Maybe<PokemonDimension>;
  classification?: Maybe<Scalars["String"]>;
  types?: Maybe<Array<Maybe<Scalars["String"]>>>;
  resistant?: Maybe<Array<Maybe<Scalars["String"]>>>;
  attacks?: Maybe<PokemonAttack>;
  weaknesses?: Maybe<Array<Maybe<Scalars["String"]>>>;
  fleeRate?: Maybe<Scalars["Float"]>;
  maxCP?: Maybe<Scalars["Int"]>;
  evolutions?: Maybe<Array<Maybe<Pokemon>>>;
  evolutionRequirements?: Maybe<PokemonEvolutionRequirement>;
  maxHP?: Maybe<Scalars["Int"]>;
  image?: Maybe<Scalars["String"]>;
};

export type PokemonAttack = {
  __typename?: "PokemonAttack";
  fast?: Maybe<Array<Maybe<Attack>>>;
  special?: Maybe<Array<Maybe<Attack>>>;
};

export type PokemonDimension = {
  __typename?: "PokemonDimension";
  minimum?: Maybe<Scalars["String"]>;
  maximum?: Maybe<Scalars["String"]>;
};

export type PokemonEvolutionRequirement = {
  __typename?: "PokemonEvolutionRequirement";
  amount?: Maybe<Scalars["Int"]>;
  name?: Maybe<Scalars["String"]>;
};

export type Query = {
  __typename?: "Query";
  query?: Maybe<Query>;
  pokemons?: Maybe<Array<Maybe<Pokemon>>>;
  pokemon?: Maybe<Pokemon>;
};

export type QueryPokemonsArgs = {
  first: Scalars["Int"];
};

export type QueryPokemonArgs = {
  id?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
};

export type GetPokemonDetailsQueryQueryVariables = {
  id: Scalars["String"];
};

export type GetPokemonDetailsQueryQuery = { __typename?: "Query" } & {
  pokemon: Maybe<
    { __typename?: "Pokemon" } & Pick<
      Pokemon,
      | "id"
      | "number"
      | "name"
      | "image"
      | "classification"
      | "types"
      | "resistant"
      | "fleeRate"
      | "maxCP"
      | "maxHP"
    > & {
        weight: Maybe<
          { __typename?: "PokemonDimension" } & Pick<
            PokemonDimension,
            "maximum"
          >
        >;
        height: Maybe<
          { __typename?: "PokemonDimension" } & Pick<
            PokemonDimension,
            "maximum"
          >
        >;
        attacks: Maybe<
          { __typename?: "PokemonAttack" } & {
            fast: Maybe<
              Array<
                Maybe<
                  { __typename?: "Attack" } & Pick<Attack, "name" | "damage">
                >
              >
            >;
            special: Maybe<
              Array<
                Maybe<
                  { __typename?: "Attack" } & Pick<Attack, "name" | "damage">
                >
              >
            >;
          }
        >;
      }
  >;
};

export type GetPokemonsQueryQueryVariables = {
  first: Scalars["Int"];
};

export type GetPokemonsQueryQuery = { __typename?: "Query" } & {
  pokemons: Maybe<
    Array<
      Maybe<
        { __typename?: "Pokemon" } & Pick<
          Pokemon,
          "id" | "number" | "name" | "image" | "classification" | "types"
        >
      >
    >
  >;
};

export const GetPokemonDetailsQueryDocument = gql`
  query GetPokemonDetailsQuery($id: String!) {
    pokemon(id: $id) {
      id
      number
      name
      image
      weight {
        maximum
      }
      height {
        maximum
      }
      classification
      types
      resistant
      attacks {
        fast {
          name
          damage
        }
        special {
          name
          damage
        }
      }
      fleeRate
      maxCP
      maxHP
    }
  }
`;

@Injectable({
  providedIn: "root"
})
export class GetPokemonDetailsQueryGQL extends Apollo.Query<
  GetPokemonDetailsQueryQuery,
  GetPokemonDetailsQueryQueryVariables
> {
  document = GetPokemonDetailsQueryDocument;
}
export const GetPokemonsQueryDocument = gql`
  query GetPokemonsQuery($first: Int!) {
    pokemons(first: $first) {
      id
      number
      name
      image
      classification
      types
    }
  }
`;

@Injectable({
  providedIn: "root"
})
export class GetPokemonsQueryGQL extends Apollo.Query<
  GetPokemonsQueryQuery,
  GetPokemonsQueryQueryVariables
> {
  document = GetPokemonsQueryDocument;
}
