/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AuthService } from './auth.service';

describe('Service: Auth', () => {
  const service = new AuthService();

  beforeEach(() => {
    let store = {};
    const mockLocalStorage = {
      getItem: (key: string): string => {
        return key in store ? store[key] : null;
      },
      setItem: (key: string, value: string) => {
        store[key] = `${value}`;
      },
      removeItem: (key: string) => {
        delete store[key];
      },
      clear: () => {
        store = {};
      },
    };
    spyOn(localStorage, 'getItem').and.callFake(mockLocalStorage.getItem);
    spyOn(localStorage, 'setItem').and.callFake(mockLocalStorage.setItem);
    spyOn(localStorage, 'removeItem').and.callFake(mockLocalStorage.removeItem);
    spyOn(localStorage, 'clear').and.callFake(mockLocalStorage.clear);
  });

  describe('login', () => {
    it('should store data in localStorage', () => {
      service.login('email', 'password');
      expect(localStorage.getItem('userEmail')).toEqual('email');
      expect(localStorage.getItem('userPass')).toEqual('password');
    });
  });

  describe('logout', () => {
    it('should remove data from localStorage', () => {
      localStorage.setItem('userEmail', 'email')
      localStorage.setItem('userPass', 'password')
      service.logout();
      expect(localStorage.getItem('userEmail')).toEqual(null);
      expect(localStorage.getItem('userPass')).toEqual(null);
    });
  });

  describe('isAuthenticated', () => {
    it('should return true if data exist', () => {
      localStorage.setItem('userEmail', 'email')
      localStorage.setItem('userPass', 'password')
      expect(service.isAuthenticated()).toBe(true);
    });

    it('should return false if data exist', () => {
      localStorage.clear()
      expect(service.isAuthenticated()).toBe(false);
    });
  });
});
