import {publicApiFunction} from '@sravan-org/single-spa-util-module-vanilla'


export default function Root(props) {
  publicApiFunction()
  return (
    <div class="alert alert-primary" role="alert">
      <strong> lorem epsum </strong>
    </div>
  );
}
