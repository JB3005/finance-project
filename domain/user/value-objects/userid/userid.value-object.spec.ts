import { UniqueEntityID } from "../../../shared"
import {UserIdValueObject} from './userid.value-objects';

describe('userid.value-object', () => {
    it('should create a valid userid', () => {
        const userid = UserIdValueObject.create(new UniqueEntityID());
        expect(userid.isSuccess).toBe(true);
    });
});
it('should create a valid userid', () => {
    const userid = UserIdValueObject.create(new UniqueEntityID('valid_id'));
    expect(userid.isSuccess).toBe(true);
    expect(userid.getResult().id.toValue()).toBe('valid_id');
    console.log(userid.getResult().id)
});