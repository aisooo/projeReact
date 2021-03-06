import {
  Flex,
  Text,
  Button,
  Link as StyledLink,
} from "rebass/styled-components";
import { Link } from "react-router-dom";
import { useMutation, useQueryClient } from "react-query";
import { removeBook } from "../api";
import { query } from "express";
import Loader from "react-loader-spinner";

export const BookItem = ({ author, title, id }) => {
  const useQueryClient = useQueryClient();
  const { mutateAsync, isLoading } = useMutation(removeBook);
  const remove = async () => {
    await mutateAsync(id);
    useQueryClient.invalidateQueries("books");
  };
  return (
    <Flex p={3} width="100%" alignItems="center">
      <Link component={StyledLink} to={`/update-book/${id}`} mr="auto">
        {title}
      </Link>
      <Text>{author}</Text>
      <Button ml="5" onClick={remove}>
        {isLoading ? (
          <Loader type="Threedots" color="#fff" height={10} />
        ) : (
          "Remove"
        )}
      </Button>
    </Flex>
  );
};
