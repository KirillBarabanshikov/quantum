import { Input } from '@/shared/ui';

const MainPage = () => {
    return (
        <div>
            <Input
                label={'Справка из ЕГРЮЛ'}
                placeholder={'+7 (495) 000 00 00'}
                hint={'допускаются только латинские буквы и цифры'}
            />
        </div>
    );
};

export default MainPage;
