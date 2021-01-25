import React from 'react';
import { Box, Chip, Typography } from '@material-ui/core';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import RecipeSearchPane from '../components/RecipeSearchPane';
import { triggerAfterWait } from '../actions/search';
import { getTerms } from '../reducers/search';

interface IProps {
  terms: any;
  triggerSearchAction: any;
}

function mapStateToProps(state: any) {
  return {
    terms: getTerms(state),
  };
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      triggerSearchAction: triggerAfterWait,
    },
    dispatch
  );

const SearchTermContainer = ({ terms, triggerSearchAction }: IProps) => {
  const termArray: string[] = terms.toJS();
  return (
    <Box>
      {termArray.map((term, idx) => (
        <Chip key={idx} label={term} />
      ))}
      <Typography>{'searchterm'}</Typography>
      <RecipeSearchPane
        onSearch={(text) => {
          triggerSearchAction(text);
        }}
      />
    </Box>
  );
};

export default connect(mapStateToProps, mapDispatchToProps, null, {
  pure: true,
})(SearchTermContainer);
