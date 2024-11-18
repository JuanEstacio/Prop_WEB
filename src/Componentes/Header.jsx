import React from 'react'

function Header({ toggleCart, cartCount }) {
    return (
      <header>
        <div className="logo">
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAABIFBMVEX///8dHRsAAAAbGxnx8fF/f4AeHh6np6f//f729vYYGBgRERH8//2dnZ379vaVlZV5eXjOQUlubm7yztXMJjrU1NQHBwMoKCfuys3kp627ABTHx8cuLi7AwL/DKzrBMD3tt7jQSk/bk5vQZFv32dXo6OjgnKLPNELUiYu+FSm1ABw/Pz+xAArwfG7cYVvQWVZeXl60tLRMTEzYfofDCCXdUFTtZmWXAADmrarzzcjosbn46u3BSTykAAzxuLHdW1LobF3ppp3ZmZHSbnjJVl+9MUbQrrGxNDzUo7Dke3njj4rIQzjDOSvmu7XKnJTIfofERlO+X2TPbWjeyMOUPkK9AASmDRyeTlK+g4npcm+sHyyxami7WlbOACHfg3rJcnI5XoY9AAARUElEQVR4nO1cCVfbyLK2JS9ajGyBJNt4w8a2cJx4YxmDyDVbNngkJHNv3oQ7Sf7/v7hV3S1ZKwQiYJKj75wkYMmtKnVX1VfV1UmlEiRIkCBBggQJEiRIkCBBggQJEiRIkCDB7wrhqQWIEYKQspSnFiIuCIXU243fZ3qs0zPrqWWIDZVX65WnluHnUYBZqXQrpwPtDP759Wfn9ZvFwmxqmnrx6m3hqYX5KaD0G+9GalNTDzerv7hLKwjgyrrvTK1ptiupwq89MwTKeXOgaW3lN1AFXMA7rdXSLrq/hTLdxfZad+v/Lp9ajjggdNdE+Hvt/e9A0goI8sNvoIytxG9hMnfDk02eYPViHa+QUrrCU2ljfXgd84iV7Sfjb2uDrTgZipBStp+CXRP3pHTWr2J7Nlld3av17cdfZgXrbef4/JWmnfb7nbVYRlzrzOffW1pzq99/+8hrTThoHY2B2Jvji4/xPNraVvdMTWu1x2+qj+rUBHA8ldGepjUPL7Ys15OF+0tRsI4325qm7W5uPDa7hud1x9dN0zxR3I8W9HsPCDZ4DHmPedHFcs5jR9juLi6zE8U9F+Jset/hwJdVTUgVzP0YZLszLs2rj2cXnzwW0+Nm95ybgpCyzi+uPl6p8ziEuyuO371WrI5XmSlnlDL3Gg3WVfdbvytUPnyPRbo74k9UQ/jTw2hKnJTLi/cZDdio1cUQrFT+KYy0LKflYe2ppYgHPS6dTnOTEPqZ6dn4ZXKaKZdDbYqBhZYpThiK8RLtB8SEKCPJDf8FfcYZCJlbuZdFPQEESUJl0rLhf/3TsoQX0rwR0POfCp3LEWXS3NB3pciRz9PyfcPQ46NoMGXSXNZzoVdiynD3jEJPgImctsF5/LM+Y1e4laeS7a7I1CVHGbnuNpupzJNPpToxmV9hdqY53lEmZ5SWbku0TcaYEJO5Nxl9RGSXqwwmIZd3LvRWHZNBDXu/wlqbuJVJG0PHcel1eoWXivhr6RfgO/rQo0zaWLXNpsEmRhqiyei5XyBuTsu8RxleZtEeTCbHogyqV5o8rZw/hKyR9kLO0fXUmxg5NleQT+r1/C0D3R9Cd81Gd63rAvyyFoJu1ECZVb8yYDZkoekc4zI8mkyJ+1GqGfZ8KphLyqXwkF4J//4D8Pz5+n/Wdwbm7mIx+vLixWihqs3B4NnL54h1GzuDwfpW1KNrPpOh3gtDypStMqkOLqFRH/6YyQipv589f+4TACQYDDTTPASMx4eDwQ75/OXLz59f/iWkhP///PkabgCY5u7e3tELxGg0ardbrSaFxmCapvYp6uF5iZkM7zIdDkKKWHJMRkyJWS4rCqIbkQnOWdP3fJCg1VLbgPEmYtxWTfJxswWgyrx5c41fAV12QQnU5ctoBDe2KJrNFhmuabZM1byKqAKBlEyXenlJBCROT/WYY07LWZwYrpT3YlrTQ+dKedNyJKAwURdUZjweM2VANLzSevXm+i/4zl9/XF9fE+3JzOwRZfb2dttts+V9LzCYaV5Y4RtgPdtkuGyxLOWcqZmJuu2YgeFkYJa4AMohGVsh1W0yPTTXzJgm0QbeundmXr35fIA1kf9+fvny2TNYjqjNYoHKHI0WqPSA4BkBXAdlmmazEj41NTswGnmxJC9XGlfM2+EfzL/hmjWX2+MmgbkppC6JMhqKsLMDz0cJBwOcIJXMzXhzrDY18vng+vrqg4X1Kuty/r7f73f61f4c8C8A/lut9h1UAf1TUAbeRDW8NyHPUQWwnuEOnzzPGLMki+DxuFyIMrkc58/ZhELqhM7Maf/gtUuUfh8kmzPYn1dfH1Qs3KbCNSMoNwNvU6xOs6mq5odQZVxcEpZMwzU1vIv9Nww+RBfQhlsNDvkdLKTZ6luKINwmn3L3Evfamaaq6t+h34PAaJsMXre9gWsp1WFiJoGP7cU4C4xonYEHasa0xRCEso3KtEPDZk2ixmCT5bo/gqKTbkTpkuaCFKcyBmUG29YDbQkQZdpm6D6mbeW0BCikepx3QRmzTEooB8OqrUwxMOJ8F5Xp3EdQ62CjuoHYZyC/gGFVHRxUyTJTz0O+nrGTfGOV+aWpdxYwjQYfIflAL4IDCGQFyjcS6E7nG0sJNpY4sGVEwfwbq5XB+lfmm49eHC0Wu4TOENhc4utXzURl/raCzrk3dAVGAqHk1obDdICTynUv7KnKcYFMuvsJZ6Y1WF93BAARaLAAP6Qejg8PLzSkM18H/oVfgdgEDGCPMoAXyADaLS+fIQwAjSYk0uhsVfFlJyXuzZZmw2NZcIWrr9S8aFC3keNmAa+yMSbKEP7hxE07ZrYdBmBqILffSay1Bpq6C3zmi8PN1BBuhrqYJ4EnC3kn/VrG8sbSRLgSBH/JGAbePylOgzKBRFrZOiTLDHTxKEPeJmCEUXNEGMBO27/MlLOvZGYonXEr4yITMDBEX/VTwJ85Pld2eSWxKDObkLEokzXkYDBh/o0LlAa77xZj/9IAqL6ZQV2+ngaGvWztgOa7ixHSZmo0jM4gm6DQiNG0x9g55pmdniO2u/i3rGNkM5CTSdJkxYciNTVuFpiyjdEuvk3N/XgiALBDACYAkAKoaDSvglv3wp/VTgeYwTHFSWcLsP1h2wb83tm+apI3s2X5lKkxlsLzHlpSo0xGxtQfSzdSgGKS6zwXqD1Z5wtguq3m2YeTrc7W9hJbFCcM8GN1LYws+hiCRf5YFPZnfaLM2N+XYXMZPud9xStpnDEDSEFtGMYwmV/21WwhTFa+QD512OpYjjRuMXxU5r5b08oVWbMnXpMThsxxyT5WIpQkFkcDBQIHMnoHn0tRjjE5VM9i6MwRItukCqktmhx1PY/P2CEl4JUadT4tl/DfiODPc/Wpn/4Lqe7RESjTnMfaPCz4ARkTLjNiNUtMOUkGSFKgVpGVSE4mBomnjWxIlqmc0LQdez/8Atj6/hAq839tbLBUoRNAv9+iWavHarJDG77BRAiKuLvRSEdZTJqr+5lMQdjH2ADPCRWAZTAg4q3dD8o5c83omV105iuA5HrMzW8hp7HXwLI44Xtl+kyWyr3l9kyoNv793IL1jSqj2kkuKcwwASDnJ5FzMT48uc2klC2HzqjuYgKNv03VjlnjeaFwuxfJl3mSLMt+golgtJptc7hEmB8xZVwCLNkMq2hAyAwykcDMBOmMq5zgjDXejKwGugBRX8pA4sblykHILJ3O+ZTZp1UI9jbdEphUGybA+P2tL7M/omPZypDxnOrMcmY2v1uF295Mb9Xg8ilhynGrjSDyNPRIZUcZgXTQfGMC2ESTVbqIMi1HF5ia21vYu9++MJsxtYGXTOxgrRBrIzjWeHHrLEOk5IBbZmaoUghKlB8s92wLQgHW+R5Vpq01fWyK8Bn6TiGijj2NbuEoWPukOEOoQgCEQoxVfDGj8fw2F5mXseqS5+SAxyJYpcTM2fkgLmVOa6qbn7ZOIkSgXGa+f3tCDTcIgqgoYmQhRFSsjU+EtY5vmWeILsAgRUmWhtliEKu0hubKmGFi5iMyMd/2rSgZRPJHVFKpOEIqFg6/t0fIwG/WBgy/xnibbARBy1GSk86hZJfjPbTZYysWSRmEaEpDYJ2gbzRv1qZB9s5uCDEIg4UZlF2ptkmx+1i5WZO7dqUXvPB9hH6C5kY3nSObosWUQmuYLmVKziOVqmqOYJmdkyJDIeUTwC/PD0Ppdvcrkeh2K90TkoJrg35klS6TXYWcTA6vYdpYrrKU1dkxd0eQ6h6TbaRKtADW3ZSxzi88meaAemay0UNTGruesPO9G5FQ6BOcmEjqTyGT0hS6nbVTGByUoXEOYoNq+jNdUpkx1WbnbmVOawvYhOoLwJ6g5ewo7Jy+VkK1aZQwWb55Yow6CzLW/GoHK11MGaAgJG1ueuoQjAG0OnfLc5QTpoynpuHmZlQZ/HSn2QmjNuJ0mhJLkTVMAs5Os7sfMCB7lHFzM80mh4RPXfTvqMy83VZbfnLm4XmbmyNnr+fjWytwCKsHSVejLkWaPy9z3KRG4q71/uwzHR8rdx5lAvuQpnqLDw2BdQ7G/cxd0qRrlsgOL+fwcLG4IPujeMPz64+v/es4o2N55gbUS1PilXvv//3Hf54/w/1frHYtjkhJFWfdV1JdJ0YzaG3deWfAqlSrnj0ee9MJt3ouGTYOEJXK/v5+NzD1QkrUb0CvR8sYwJ8u9/crl5cHBxt01P19+At3u4ICgAgba8qtDDcUgazZhu34Uw49+/mAvRy+wP4E03YixN1PFeKXAnEzRGb84M5hzDtAZPkkJHKjJr9MM3GCBARiJgI9wf5JDP2CGD2C03ISOfhDKFLLF7MRKOVFdq3k3aDIs08JoxT0fDFkiGKeJgL5UsTo9g3xQc/O5MgYuKr36uxHb5JsfwWZS684S4d+m7aiZiaRw8uTeJsh9ZkhS7lQyHIxgz3y+LMx87xEnUvjpzwnYrlGjhhBIh0nTv9zAHhDnHMDWXAEBc4ZZax+Z2kNFreWXGA7hLjTL5aiRmDNaPlcZBkXuFyMUyOuRLcklImVsO5Z39YRe9lYbWpE60LKZ2L2prQ00F/zE9CjdyXoXjFr/5F8dSWO3aSnxJBewaUyMDNOM2f4Y2KcGadXhPdCltg+Zj5N3rurDoao0a/J9Qwe4ggZwVZm2FtmDGE3yPX4Dng4Wyy+8rdct1cV2xzzdI4IrCUox2XFFO0IBmMPadIg+9T50EewzV/fS/op2M2Jhr+eZ78v1tfEp70mQ5dWDg1pSBZRjit5vs/WnlxMZdj74icr3jtYsTC+3m7dXvtRN7DuWd9xnx7duZAkMBmOJ4vIu71mN6rIOrp+8gj/HkcR7+ClGI9DsCUAq0EM731doSvGWO25rqbybD4hSDSoyaD1uMBeklSG10Fb68B6PE/IkAMTcZ6JElgPhjTMljwAokGEs21KGnquDqn94rk5dgPn2cUUVpwwZPt+vu59wippy4/zTFSGdY2HNCaUSWjW7VZA7w2sCxVjRD0sDInsJUEYcho6eB/ToU4yxnMqenQ4k0iDZaMeHbzT8hAsggrFy57lYr8kMKReVCAjD/Eb0s9gekNs5qXM0q2GAt1qns6c4aVYLHpJkhORokaIMQvI36SMfMuGMuEyNtnxeljHkJb9t2FwlaRjgH7Dk3Bm/CeBvKJIwLtY84yPlLCeNLCpzCyay/C+o5I/CWHGyZKPyDhMpBxFdthnmKw06FEheegNQ3TCeS6zbFH1P0WSjVwp3sNQvdVhjjSVLGGXXsEBOJTaewNThnAZKYy5sdWL+QHrUM3JPkjl4ST240OQMvtb39hRRnC2PeZh+ZLnhhlRhzdW7N3YHJf3VL3oyW7S1sgcs7Hqe0p+WnuMc532woA1otOsis95k8xl81yP/ijlPCYjcHR2MT9IM+t5osPPbGEYdcdkZG8n0JSqiN54Wpds63GBneym+QEz9cc4KiikesVVL5gDQ7dqE/2S5ztF2+8KlCwiVZm4R7CzULCpJa15DOgT//63ffxCT2Vsou8J04yf8OX88nQdHzrC1E4V0uG9HHGjlos4LiLLImtPBmU8a8ROCpDLRJZdiCHpYD3845lMkYuSBjNL6mFzhs9kqIDyRIxua6SrLOMYXf3hPZe4GllXMcoZOz9AD+tyvBlmMvTcXCQNzclY2wnNDx4E+jCSzBi4xSqGrhE7j0Zapc+iu2fJqeG6Q2seFuK0Hq4LLxnGEP//H8Z3JdnzPXY+CBtOU0LRMPjg5PK8zNWLGWxZZ/nBA/9HLr1iZPm3PMvW6KEsVm52f0/Is08ndJRZzghWmMuzUgMX1op97wMro6/kIzCdstOiU/r7imeViTX2RRbz9WnYEDo1+BobofbAJpPsICZIkCBBggQJEiRIkCBBggQJEiRIkCBBggQJEiRIkCBBggQJEiRI8I/H/wDE25dWKORQVwAAAABJRU5ErkJggg==" alt="Logo de NB SHOP" />
        </div>
        <nav className="nav">
          <ul>
            <li><a href="#inicio">Inicio</a></li>
            <li><a href="#productos">Productos</a></li>
            <li><a href="#categorias">Categorías</a></li>
            <li><a href="#contacto">Contacto</a></li>
          </ul>
        </nav>
        <div className="cart-icon" onClick={toggleCart}>
          🛒 <span>{cartCount}</span>
        </div>
      </header>
    );
  }

export default Header